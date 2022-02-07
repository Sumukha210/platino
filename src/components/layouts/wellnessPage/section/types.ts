export interface wrapperProps {
  bgColor?: string;
  textColor?: string;
  rowReverse?: boolean;
}

export interface sectionTypes extends wrapperProps {
  largeImg: StaticImageData;
  smallImg: StaticImageData;
  caption: string;
  title: string;
  para: string;
}
