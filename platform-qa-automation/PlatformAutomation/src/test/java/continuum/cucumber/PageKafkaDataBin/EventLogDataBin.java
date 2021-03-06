package continuum.cucumber.PageKafkaDataBin;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

@JsonIgnoreProperties(ignoreUnknown = false)
@JsonPropertyOrder({
        "Action",
        "Topic",
        "RegID",
        "LegacyRegID",
        "DcDateTimeUtc",
        "PartnerID",
        "ClientID",
        "SiteID",
        "EndpointID",
        "AgentID",
        "RemoteAddr",
        "TransactionID",
        "Message"
})
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EventLogDataBin {

    @JsonProperty(value =  "Action", access = JsonProperty.Access.READ_WRITE)
    private String action;
    @JsonProperty(value = "Topic", access = JsonProperty.Access.READ_WRITE)
    private String topic;
    @JsonProperty(value =  "RegID", access = JsonProperty.Access.READ_WRITE)
    private String regID;
    @JsonProperty(value = "LegacyRegID", access = JsonProperty.Access.READ_WRITE)
    private String legacyRegID;
    @JsonProperty(value = "DcDateTimeUtc", access = JsonProperty.Access.READ_WRITE)
    private String dcDateTimeUtc;
    @JsonProperty(value = "PartnerID", access = JsonProperty.Access.READ_WRITE)
    private String partnerID;
    @JsonProperty(value = "ClientID", access = JsonProperty.Access.READ_WRITE)
    private String clientID;
    @JsonProperty(value = "SiteID", access = JsonProperty.Access.READ_WRITE)
    private String siteID;
    @JsonProperty(value = "EndpointID", access = JsonProperty.Access.READ_WRITE)
    private String endpointID;
    @JsonProperty(value = "AgentID", access = JsonProperty.Access.READ_WRITE)
    private String agentID;
    @JsonProperty(value = "RemoteAddr", access = JsonProperty.Access.READ_WRITE)
    private String remoteAddr;
    @JsonProperty(value = "TransactionID", access = JsonProperty.Access.READ_WRITE)
    private String transactionID;
    @JsonProperty(value = "Message", access = JsonProperty.Access.READ_WRITE)
    private Object message;

    public String getAction() {
        return action;
    }

    public EventLogDataBin setAction(String action) {
        this.action = action;
        return this;
    }

    public String getTopic() {
        return topic;
    }

    public EventLogDataBin setTopic(String topic) {
        this.topic = topic;
        return this;
    }

    public String getRegID() {
        return regID;
    }

    public EventLogDataBin setRegID(String regID) {
        this.regID = regID;
        return this;
    }

    public String getLegacyRegID() {
        return legacyRegID;
    }

    public EventLogDataBin setLegacyRegID(String legacyRegID) {
        this.legacyRegID = legacyRegID;
        return this;
    }

    public String getDcDateTimeUtc() {
        return dcDateTimeUtc;
    }

    public EventLogDataBin setDcDateTimeUtc(String dcDateTimeUtc) {
        this.dcDateTimeUtc = dcDateTimeUtc;
        return this;
    }

    public String getPartnerID() {
        return partnerID;
    }

    public EventLogDataBin setPartnerID(String partnerID) {
        this.partnerID = partnerID;
        return this;
    }

    public String getClientID() {
        return clientID;
    }

    public EventLogDataBin setClientID(String clientID) {
        this.clientID = clientID;
        return this;
    }

    public String getSiteID() {
        return siteID;
    }

    public EventLogDataBin setSiteID(String siteID) {
        this.siteID = siteID;
        return this;
    }

    public String getEndpointID() {
        return endpointID;
    }

    public EventLogDataBin setEndpointID(String endpointID) {
        this.endpointID = endpointID;
        return this;
    }

    public String getAgentID() {
        return agentID;
    }

    public EventLogDataBin setAgentID(String agentID) {
        this.agentID = agentID;
        return this;
    }

    public String getRemoteAddr() {
        return remoteAddr;
    }

    public EventLogDataBin setRemoteAddr(String remoteAddr) {
        this.remoteAddr = remoteAddr;
        return this;
    }

    public String getTransactionID() {
        return transactionID;
    }

    public EventLogDataBin setTransactionID(String transactionID) {
        this.transactionID = transactionID;
        return this;
    }

    public Object getMessage() {
        return message;
    }

    public EventLogDataBin setMessage(Object message) {
        this.message = message;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (!(o instanceof EventLogDataBin)) return false;

        EventLogDataBin that = (EventLogDataBin) o;

        return new EqualsBuilder()
                .append(getAction(), that.getAction())
                .append(getTopic(), that.getTopic())
                .append(getRegID(), that.getRegID())
                .append(getLegacyRegID(), that.getLegacyRegID())
                .append(getDcDateTimeUtc(), that.getDcDateTimeUtc())
                .append(getPartnerID(), that.getPartnerID())
                .append(getClientID(), that.getClientID())
                .append(getSiteID(), that.getSiteID())
                .append(getEndpointID(), that.getEndpointID())
                .append(getAgentID(), that.getAgentID())
                .append(getRemoteAddr(), that.getRemoteAddr())
                .append(getTransactionID(), that.getTransactionID())
                .append(getMessage(), that.getMessage())
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
                .append(getAction())
                .append(getTopic())
                .append(getRegID())
                .append(getLegacyRegID())
                .append(getDcDateTimeUtc())
                .append(getPartnerID())
                .append(getClientID())
                .append(getSiteID())
                .append(getEndpointID())
                .append(getAgentID())
                .append(getRemoteAddr())
                .append(getTransactionID())
                .append(getMessage())
                .toHashCode();
    }
}
