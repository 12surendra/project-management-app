'use client';

import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Style, Icon } from "ol/style";
import { fromLonLat } from "ol/proj";
import { sampleProjects } from "../lib/data";
import { useRouter } from "next/navigation";

export default function MapView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!mapRef.current) return;

    const vectorSource = new VectorSource();
    sampleProjects.forEach((project) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([project.location.lon, project.location.lat])),
        projectId: project.id,
      });
      vectorSource.addFeature(feature);
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: vectorSource,
          style: new Style({
            image: new Icon({
              src: "https://openlayers.org/en/latest/examples/data/icon.png",
              scale: 0.1,
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-100, 40]),
        zoom: 4,
      }),
    });

    map.on("click", (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        const projectId = feature.get("projectId");
        router.push(`/dashboard/projects/${projectId}`);
      });
    });

    return () => map.setTarget(undefined);
  }, [router]);

  return <div ref={mapRef} className="w-full h-[500px]" />;
}