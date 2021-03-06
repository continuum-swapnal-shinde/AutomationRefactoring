package continuum.cucumber.Page;

import com.fasterxml.jackson.annotation.*;

import continuum.cucumber.PageKafkaConfigUtilities.Autogenerated;
import continuum.cucumber.PageKafkaConfigUtilities.SortBy;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.lang.reflect.Field;
import java.util.*;


public abstract class AbstractDTO implements Comparable <Object> {

    public AbstractDTO() {
        //default
    }

    @JsonIgnore
    public Map<Object, Object> unknownFields = new HashMap<Object, Object>();

    @JsonAnyGetter
    public Map<Object, Object> any() {
        return unknownFields;
    }

    @JsonAnySetter
    public void set(Object name, Object value) {
        unknownFields.put(name, value);
    }

    public boolean hasUnknowProperties() {
        return !unknownFields.isEmpty();
    }

    @JsonIgnore
    public String[] getAutogeneratedAnnotations() {
        try {
            return this.getClass().getAnnotation(Autogenerated.class).value();
        } catch (Exception e) {
            return new String[]{""};
        }
    }

    @Override
    public String toString() {
        return ReflectionToStringBuilder.toString(this,
                ToStringStyle.MULTI_LINE_STYLE, true, false);
//        return ToStringBuilder.reflectionToString(this);
    }

    @JsonIgnore
    public <T> T sorted() {
        try {
            this.sortDto(this);
            return (T) this;
        } catch (IllegalAccessException | NoSuchFieldException e) {
            e.printStackTrace();
        }
        return (T) this;
    }

    @JsonIgnore
    @SuppressWarnings("unchecked")
    private void sortDto(Object dto) throws IllegalAccessException, NoSuchFieldException {
        if (dto instanceof List) {
            Collections.sort((List)dto);
            for (Object listItem: (List)dto) {
                this.sortDto(listItem);
            }
        }
        else if (dto instanceof AbstractDTO) {
            for (Field field: dto.getClass().getFields()) {
                this.sortDto(field.get(dto));
            }
        }
    }

    @JsonIgnore
    @SuppressWarnings("unchecked")
    public static String[] getOrderedFieldNames(Class<?> dto) {
        try {
            return dto.getAnnotation(JsonPropertyOrder.class).value();
        } catch (Exception e) {
            return new String[]{""};
        }
    }

    @JsonIgnore
    @SuppressWarnings("unchecked")
    public static String[] getOrderedJsonProperties(Class<?> dto) {
        List<String> jsonPropertyOrder = new ArrayList<String>();
        try {
            for (String fieldName: getOrderedFieldNames(dto)) {
                String jsonPropertyName = dto.getDeclaredField(fieldName).getAnnotation(JsonProperty.class).value();
                jsonPropertyOrder.add(jsonPropertyOrder.size(), jsonPropertyName);
            }
            return jsonPropertyOrder.toArray(new String[jsonPropertyOrder.size()]);
        } catch (Exception e) {
            return new String[]{""};
        }
    }

    @JsonIgnore
    public <T> T setFieldByJsonPropertyName(String fieldName, Object value) {
        try {
            for (Field field: this.getClass().getDeclaredFields()) {
                field.setAccessible(true);
                if (field.getAnnotation(JsonProperty.class).value().equalsIgnoreCase(fieldName)) {
                    field.set(this, value);
                    break;
                }
            }
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return (T) this;
    }

    @JsonIgnore
    @Override
    public int compareTo(Object obj) {
        String fieldName = this.getClass().getAnnotation(SortBy.class).value();
        boolean found = true;
        Object valueThis = null;
        Object valueOther = null;
        // get annotated field and use it to sort collection
        if (obj instanceof AbstractDTO) {
            for (Field field : obj.getClass().getFields()) {
                if (field.getName().equals(fieldName)) {
                    try {
                        if (field.get(obj) != null && field.get(this) != null) {
                            valueThis = field.get(this);
                            valueOther = field.get(obj);
                            break;
                        } else {
                            found = false;
                            break;
                        }
                    } catch (Exception e) {
                        found = false;
                        break;
                    }
                }
            }
            if (found && valueThis instanceof Comparable && valueOther instanceof Comparable) {
                return ((Comparable) valueThis).compareTo(valueOther);
            }
        }
        return 0;
    }

}
