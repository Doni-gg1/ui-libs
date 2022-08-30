import './App.css';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

function App() {


  const validateMessages = {
    types: {
      email: 'Email is not valid'
    }
  }
  return (
    <div className="App">

      <Accordion>
        <AccordionSummary>
          <Typography sx={{ color: 'green' }} align='center' variant='h3'>About web develop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Front-end</Typography>
          <Typography>Back-end</Typography>
          <Typography>Data Base</Typography>
        </AccordionDetails>
      </Accordion>


      <Form validateMessages={validateMessages} onFinish={() => console.log('finished')}>
        <Form.Item
          label='Username'
          name='userName'
          rules={[{ required: true, message: 'This field required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label='Email'
          name='email'
          rules={[{ required: true, message: 'You need input your email'}, { type: 'email', message: 'Email is not valid' }]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      
    </div>
  );
}

export default App;
