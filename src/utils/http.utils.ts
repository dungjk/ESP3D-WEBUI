import environment from './../environment';

export function Fetch(url: string, opts?: any) {
  return fetch(url, opts);
}

export function FetchGet(url: string, opts?: any): Promise<any> {
  const options: any = { method: 'GET', 'Content-Type': 'application-json', ...opts };
  return Fetch(url, options).then((resp) => {
    if (resp.status >= 200 && resp.status < 300) return resp;
    throw new Error(resp.statusText);
  });
}

export function FetchPost(url: string, data: any, opts?: any) {
  var opts = { 'Content-Type': 'application/json', ...opts };
  const options: any = {
    method: 'POST',
    'Content-Type': 'application/json',
    ...opts,
  };
  data && (data.body = data);
  return Fetch(url, options).then((resp) => {
    if (resp.status >= 200 && resp.status < 300) return resp;
    throw new Error(resp.statusText);
  });
}

export function SendCommand(command: string) {
  return Fetch(`${environment.host}/command?plain=${encodeURIComponent(command)}`, {
    method: 'GET',
    redirect: 'follow',
    mode: 'no-cors',
  });
}
