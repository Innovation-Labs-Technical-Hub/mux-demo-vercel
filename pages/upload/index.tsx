import React, { useCallback } from 'react';
import Head from 'next/head';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, UploadProps } from 'antd';
import axios from 'axios';

export default function UploadPage() {
  const uploadProps: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleSubmit = () => {
    try {
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <div>
      <Head>
        <title>Upload Page</title>
      </Head>
      <div>
        <h1>Upload Video</h1>
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
