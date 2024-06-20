package de.morpheusbox.system.morpheusagent.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.AgentResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

@Component
public class SocketEdgeComputerHandler extends TextWebSocketHandler {

    public void handleMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException{
        ObjectMapper objectMapper = new ObjectMapper();
        String payload = message.getPayload();

        AgentResponse agentResponse = objectMapper.readValue(payload, AgentResponse.class);
        session.sendMessage( new TextMessage("test-text message"));

    }
}
