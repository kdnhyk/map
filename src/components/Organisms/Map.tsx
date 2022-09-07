import { useEffect, useState } from "react";
import styled from "styled-components";

const MapBlock = styled.div`
  height: 100%;
  width: 100%;
`;

type tMap = {
  title: string;
  type: string;
  onClickMap: () => {};
};

export default function Map() {
  const { naver } = window;
  const [defaultLocation, setDefaultLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setDefaultLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  useEffect(() => {
    if (typeof defaultLocation !== "string") {
      const currentPosition = [
        defaultLocation.latitude,
        defaultLocation.longitude,
      ];

      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });
    }
  }, [defaultLocation]);

  // 내 위치 마커 표시하기
  useEffect(() => {
    if (typeof defaultLocation !== "string") {
      const currentPosition = [
        defaultLocation.latitude,
        defaultLocation.longitude,
      ];

      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
        // 원하는 이미지로 마커 커스텀
        // icon: {
        //     url: pinImage,
        //     size: new naver.maps.Size(50, 52),
        //     origin: new naver.maps.Point(0, 0),
        //     anchor: new naver.maps.Point(25, 26),
        //   },
      });
    }
  }, [defaultLocation]);

  return <MapBlock id="map"></MapBlock>;
}
