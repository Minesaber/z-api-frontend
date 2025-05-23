import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import { Modal } from 'antd';

export type Props = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<boolean>;
  createModalOpen: boolean;
};

const CreateModal: React.FC<Props> = (props) => {
  const { createModalOpen, columns, onCancel, onSubmit } = props;
  return (
    <Modal footer={null} open={createModalOpen} onCancel={() => onCancel?.()}>
      <ProTable
        type="form"
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};

export default CreateModal;
