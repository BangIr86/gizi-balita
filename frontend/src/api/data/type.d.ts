type DataList = {
  no: number;
  id: number;
  name: string;
  gender: string;
  age: number;
  weight: string;
  height: string;
  lila: string;
  status: string;
  created_at: string;
  updated_at: string;
};

type DataListParams = {
  page: number | string;
  search?: string;
  size: number | string;
  gizi?: string;
  gender?: string;
};

type DataPayload = {
  name: string;
  gender: string;
  age: string;
  weight: string;
  height: string;
  lila: string;
  k: number;
};

type UpdatePayload = {
  name: string;
  gender: string;
  age: number;
  weight: string;
  height: string;
  lila: string;
  status: string;
};

type PayloadResponse = {
  name: string;
  gender: string;
  age: number;
  weight: string;
  height: string;
  lila: string;
  k: number;
  status: string;
};

type Neighbor = {
  no: number;
  id: number;
  name: string;
  gender: string;
  age: number;
  weight: string;
  height: string;
  lila: string;
  status: string;
  dist: number;
};

type DataResponse = {
  payload: PayloadResponse;
  neighbor: Neighbor[];
};

type UploadPayload = {
  file: string;
};
