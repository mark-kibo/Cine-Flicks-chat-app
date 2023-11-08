
'use client';

import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';

export default function ErrorComponent({message}) {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Info alert!</span> {message}
    </Alert>
  );
}
