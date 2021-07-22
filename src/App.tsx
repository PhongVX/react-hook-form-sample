import 'antd/dist/antd.css';
import 'src/common/styles/styles.scss';
import 'src/styles.scss';
import { Tabs } from 'antd';

import SampleRegister from 'src/views/SampleRegister';
import Validation from 'src/views/Validation';
import IntegratingWithCustomComponent from 'src/views/IntegratingWithCustomComponent';
import IntegratingWithUILib from 'src/views/IntegratingWithUILib';
import SchemaValidation from 'src/views/SchemaValidation';
import Nested from 'src/views/Nested';

const { TabPane } = Tabs;

function App() {
  return (
    <div className='wrapper-app'>
      <Tabs defaultActiveKey="1">
        <TabPane tab='Register' key='1'>
          <SampleRegister />
        </TabPane>
        <TabPane tab='Validation' key='2'>
          <Validation />
        </TabPane>
        <TabPane tab='IntegratingWithCustomComponent' key='3'>
          <IntegratingWithCustomComponent />
        </TabPane>
        <TabPane tab='IntegratingWithCustomComponent' key='4'>
          <IntegratingWithUILib />
        </TabPane>
        <TabPane tab='SchemaValidation' key='5'>
          <SchemaValidation />
        </TabPane>
        <TabPane tab='Nested' key='6'>
          <Nested />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
