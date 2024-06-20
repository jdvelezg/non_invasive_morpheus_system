package de.morpheusbox.system.morpheusagent.repository.dtos.device;

/**
 * Used to send responses back to the devices after a RESTFul operation.
 * The content of the response is stored in the "response" field. Allows to send a string message and state if an error ocurred with the isError field.
 * @param <T> the response to be sent for the REST request
 */
public class AgentResponse<T>{

    private String message;
    private T response;
    private boolean error;

    /**
     * Constructor
     * @param message message to send as response
     * @param response object to send as response
     * @param error True if the result is an identified error
     */
    public AgentResponse(String message, T response, boolean error) {
        this.message = message;
        this.response = response;
        this.error = error;
    }

    /**
     * Constructor
     */
    public AgentResponse() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getResponse() {
        return response;
    }

    public void setResponse(T response) {
        this.response = response;
    }

    public boolean isError() {
        return error;
    }

    public void setError(boolean error) {
        this.error = error;
    }
}
