'use client';
import { addDoc, collection } from 'firebase/firestore/lite';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FirebaseApp } from '@/library/firebase';

interface InputState {
  writer: string;
  contents: string;
}

export default function Home() {
  const [inputVal, setInputVal] = useState<InputState>({
    writer: '',
    contents: '',
  });
  const router = useRouter();

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal({
      ...inputVal,
      [e.target.id]: e.target.value,
    });
  };

  const onClickFirebase = async () => {
    try {
      const Board = collection(FirebaseApp, 'Board');
      addDoc(Board, {});
      void addDoc(Board, inputVal);
      alert('등록되었습니다.');
    } catch (error) {
      console.log('error');
    } finally {
      <div>loadding</div>;
    }
  };

  return (
    <>
      <h1>파이어베이스</h1>
      <input type="text" id="writer" onChange={onChangeValue} />
      <input type="text" id="contents" onChange={onChangeValue} />
      <button onClick={onClickFirebase}></button>
    </>
  );
}
