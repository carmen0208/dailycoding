"use strict";

const mediaStreamConstrains = {
  video: {
    frameRate: { min: 20 },
    width: { min: 640, ideal: 1280 },
    height: { min: 360, ideal: 720 },
    aspectRatio: 16 / 9,
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true,
  },
};

const videoPlayer = document.querySelector("video");

function loadMediaStream(mediaStream) {
  videoPlayer.srcObject = mediaStream;
}

function handleLocalMediaStreamError(error) {
  console.log("navigator.getUserMedia error.", error);
}

navigator.mediaDevices
  .getUserMedia(mediaStreamConstrains)
  .then(loadMediaStream)
  .catch(handleLocalMediaStreamError);

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevice() not supported.");
} else {
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach(gotDevices);
    })
    .catch(handleDeviceError);
}

function gotDevices(devices) {
  devices.forEach((deviceInfo) => {
    console.log(
      deviceInfo.kind + ": " + deviceInfo.label + " id = " + deviceInfo.deviceId
    );
  });
}

function handleDeviceError(error) {
  console.log(error.name + ": " + error.message);
}
var filterSelect = document.querySelector("select#filter");
// picture
var snapshot = document.querySelector("button#snapshot");
var picture = document.querySelector("canvas#picture");
picture.width = 800;
picture.height = 480;

snapshot.onclick = function () {
  picture.className = filterSelect.value;
  picture
    .getContext("2d")
    .drawImage(videoPlayer, 0, 0, picture.width, picture.height);
};

filtersSelect.onchange = function () {
  videoplay.className = filtersSelect.value;
};
