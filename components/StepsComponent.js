import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description.';
const { Step } = Steps;
const StepsComponent = () => {
  return (
    <div>
          <Steps current={1} size="small">
              <Step title="Step 1" description="Step 1 description" />
              <Step title="Step 2" description="Step 2 description" />
              <Step title="Step 3" description="Step 3 description" />
          </Steps>

          {/* <Steps
              direction="vertical"
              size="small"
              current={1}
              items={[
                  {
                      title: 'Finished',
                      description,
                  },
                  {
                      title: 'In Progress',
                      description,
                  },
                  {
                      title: 'Waiting',
                      description,
                  },
              ]}
          /> */}
    </div>
  )
}

export default StepsComponent