import React from "react";

import { Card, CardHeader, CardBody, Image } from "@heroui/react";

const cardData = [
  {
    title: "Daily Mix",
    tracks: 12,
    name: "Frontend Radio",
    image: "https://heroui.com/images/hero-card-complete.jpeg",
  },
  {
    title: "Daily Mix",
    tracks: 12,
    name: "Frontend Radio",
    image: "https://heroui.com/images/hero-card-complete.jpeg",
  },
];

export default function ListRender() {
  return (
    <div className="flex justify-center flex-column m-40 text-white">
      {cardData.map((item) => (
        <Card className="p-4 bg-gray-700 rounded-lg mr-10">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{item.title}</p>
            <small className="text-default-500">{item.tracks} Tracks</small>
            <h4 className="font-bold text-large">{item.name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={item.image}
              width={270}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
