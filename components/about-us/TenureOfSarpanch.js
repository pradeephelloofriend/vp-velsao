import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { useRouter } from 'next/router';
import SpinningComponent from '../../components/spin/SpinningComponent';
import { getTenureOfSarpanch } from '../../lib/api';

const TenureOfSarpanch = () => {
  const router = useRouter();
  const [sData, setSData] = useState(null);

  const columns = [
    {
      title: 'Tenure of Sarpanch from',
      dataIndex: 'tenureSarpanchesFrom',
      key: 'tenureSarpanchesFrom',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tenure of Sarpanch to',
      dataIndex: 'tenureSarpanchesTo',
      key: 'tenureSarpanchesTo',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Name of Sarpanches',
      dataIndex: 'nameOfSarpanches',
      key: 'nameOfSarpanches',
      render: text => <a>{text}</a>,
    }
  ];

  useEffect(() => {
    let isApiSubscribed = true;

    const fetchData = async () => {
      try {
        const cData = await getTenureOfSarpanch();
        if (isApiSubscribed) {
          const formattedData = cData.map((element, idx) => ({
            key: idx,
            tenureSarpanchesFrom: element.tenureOfSarpanch.tenureSarpanchesFrom,
            tenureSarpanchesTo: element.tenureOfSarpanch.tenureSarpanchesTo,
            designation: element.tenureOfSarpanch.designation,
            nameOfSarpanches: element.tenureOfSarpanch.nameOfSarpanches
          }));
          setSData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <>
      {sData !== null ? (
        <div className="page-content">
          <div className="scheme-block">
            <Table bordered columns={columns} dataSource={sData} />
          </div>
        </div>
      ) : (
        <SpinningComponent />
      )}
    </>
  );
};

export default TenureOfSarpanch;
