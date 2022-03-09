import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Home = () => {

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
          <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
              <Tab label="Active" />
              <Tab label="Disabled" disabled />
              <Tab label="Active" />
        </Tabs>
      <form action="">
        <lavel for="device name">Device Name</lavel>
        <input type="text" />
      </form>
    </div>
  )
}
export default Home;