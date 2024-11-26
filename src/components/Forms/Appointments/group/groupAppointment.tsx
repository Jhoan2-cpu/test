import { useState } from 'react';
import { Card } from '@nextui-org/react';
import UserInfo from './userInfo';
import TimeSelector from './timeSelector';
import SubmitButton from './submitButton';
import StudentSelection from './StudentSelection';
import {Divider} from "@nextui-org/divider";

const GroupAppointment = () => {
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  
  const handleTimeChange = (time: string) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    );
  };

  const handleSubmit = () => {
    console.log('Selected Times:', selectedTimes);
    // Aquí puedes manejar el envío del formulario, como llamar a una API
  };

  return (
    <Card className="p-6 shadow-lg rounded-lg border border-gray-300 gap-6 items-start" style={{ width: '100%' }}>
      <p className='font-bold text-center w-full border-b-2 py-2'>REGISTRAR CITA</p>
      <UserInfo />
      <Divider className="my-0" />
      <TimeSelector selectedTimes={selectedTimes} onTimeChange={handleTimeChange} />
      <Divider className="my-0" />
      <StudentSelection />
      <SubmitButton onSubmit={handleSubmit} />
    </Card>
  );
};

export default GroupAppointment;
