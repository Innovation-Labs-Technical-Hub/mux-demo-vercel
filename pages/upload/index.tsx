import React, { useCallback } from 'react';
import Head from 'next/head';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, UploadProps } from 'antd';
import MuxPlayer from '@mux/mux-player-react';
import axios from 'axios';

export default function UploadPage() {
  const uploadProps: UploadProps = {
    accept: '.mp4',
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
    onDownload(file) {
      handleSubmit(file);
    },
  };

  const handleSubmit = (file: any) => {
    try {
      console.log(file);
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
      <br />
      <MuxPlayer
        streamType="on-demand"
        playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
        metadata={{
          video_id: 'video-id-54321',
          video_title: 'Test video title',
          viewer_user_id: 'user-id-007',
        }}
      />
    </div>
  );
}
