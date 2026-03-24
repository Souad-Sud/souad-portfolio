export type NavLink = {
  name: string;
  path: string;
  external?: boolean;
};

export type FooterNav = {
  name: string;
  path: string;
}

export type IconList = {
  name: string;
  image: string;
  text: string;
}


export type WorkItems = {
  image: string,
  title: string,
  bgColor: string
}

export type WorkpresentationRType = {
  image: string,
  link: string,
  size: string
}
//sidebar type
export type Project = {
  id: number;
  image: string;
  title: string
  description: string;
  link: string;
};

//Project work introduction content type

export interface ProjectWorks {
  images: string[];
}