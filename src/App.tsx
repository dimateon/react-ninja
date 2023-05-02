import { Provider } from 'react-redux';
import './App.css';
import { Todo } from './components/Todo';

import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Avatar, Card, Tooltip } from 'antd';
import { store } from './store/store';

const { Meta } = Card;


function App() {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  );
}

export default App;



{/* <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <DeleteOutlined key="remove"/>,
          <EditOutlined key="edit" />,
          <FileDoneOutlined key="done"/>
        ]}
      >
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title="Card title"
          description="This is the description"
        />
      </Card> */}
