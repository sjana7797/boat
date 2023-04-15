import { StaticImageData } from "next/image";

export interface Promise {
  image: StaticImageData;
  promise: string;
  id: number;
}
