/*
Step 1: install the advanced chatkit client
npm i react-chat-engine-advanced
Step 2: import the advanced chatkit client
*/


/* Here we used the chat advanced npm third party 
    we can also use the pritty page 
    the command is npm i react-chat-engine-pretty
*/
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "652497e9-214d-4a4d-af3d-12547409c3cf",
    props.user.username,
    props.user.secret
  ); // Project ID
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
