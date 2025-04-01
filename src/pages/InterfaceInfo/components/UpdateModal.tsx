import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import React, { useEffect, useRef } from 'react';
import { Modal } from 'antd';
import { ProFormInstance } from '@ant-design/pro-form';

export type Props = {
  columns: ProColumns<API.InterfaceInfo>[];
  values: API.InterfaceInfo;
  updateModalOpen: boolean;
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
};

const UpdateModal: React.FC<Props> = (props) => {
  const { columns, values, updateModalOpen, onCancel, onSubmit } = props;
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  }, [values]);
  return (
    <Modal footer={null} open={updateModalOpen} onCancel={() => onCancel?.()}>
      <ProTable
        columns={columns}
        type="form"
        formRef={formRef}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};

export default UpdateModal;
