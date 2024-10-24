import { useState } from "react";

export const useAudioRecord = async () => {
  const [start, _setStart] = useState("");
  const [stop, _setStop] = useState("");
  const [src, setSrc] = useState("");
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const record = new MediaRecorder(stream);

  const data: Blob[] = [];

  record.ondataavailable = (e) => {
    console.log(e.data);
    data.push(e.data);
  };

  record.start();

  record.onerror = (e) => {
    console.error(e);
  };

  record.onstop = (_e) => {
    setSrc(URL.createObjectURL(new Blob(data)));
  };

  return {
    src: src,
    startFn: record.start,
    stopFn: record.stop,
    start: start,
    stop: stop,
  };
};
