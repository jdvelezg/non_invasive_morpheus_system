package de.morpheusbox.system.morpheusagent.services;


import de.morpheusbox.system.morpheusagent.config.FiwareBrokerConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FiwareServiceController {

    @Autowired
    FiwareBrokerConfiguration fiwareBrokerConfiguration;

    /**
     * Creates an entity in fiware broker
     */
    public <T> T createEntity(T entity){
        return null;
    }

    public <T> T queryEntity(String entityId){
        return null;
    }

    /**
     *  In order to get a compact representation corresponding to a list of attribute values.
     *  The attrs specify the order
     * @param attrs comma separated order of attributes values to list
     * @return list of values as string
     */
    public List<String> queryEntityValues(String attrs){
        return null;
    }

    /**
     * request a single attribute using the GET /v2/entities/{entityId}/attrs/{attrsName} operation
     * @param entityId
     * @param attrsName
     * @return
     */
    public String querySIngleAttribute(String entityId, String attrsName){
        return null;
    }

    /**
     * Updates the value of an entity attribute using PATCH /v2/entities/{id}/attrs operation
     * @param entityId
     * @return
     * @param <T>
     */
    public <T> T updateEntity(String entityId, String attrs){
        return null;
    }

    /**
     * {
     *   "description": "A subscription to get info about Room1",
     *   "subject": {
     *     "entities": [
     *       {
     *         "id": "Room1",
     *         "type": "Room"
     *       }
     *     ],
     *     "condition": {
     *       "attrs": [
     *         "pressure"
     *       ]
     *     }
     *   },
     *   "notification": {
     *     "http": {
     *       "url": "http://localhost:1028/accumulate"
     *     },
     *     "attrs": [
     *       "temperature"
     *     ]
     *   },
     *   "expires": "2040-01-01T14:00:00.00Z"
     * }
     */
    public void registerSubscription(String entityId, String attrs){

    }
}
