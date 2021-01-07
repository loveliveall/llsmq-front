import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { RouteComponentProps, navigate } from '@reach/router';

import { API_ENDPOINT } from '@/const';
import { Route } from '@/routes';

import { getHandleName, saveHandleName } from '@/utils';

interface GetSeesionResponse {
  handle_name: string,
}

const Home: FunctionComponent<RouteComponentProps> = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    (async () => {
      setIsLoading(true);
      const handleName = getHandleName();
      const res = await fetch(`${API_ENDPOINT}/session`, {
        method: 'GET',
        headers: handleName === null ? undefined : {
          'X-Handle-Name': handleName,
        },
      });
      if (res.ok) {
        const body = await res.json() as GetSeesionResponse;
        saveHandleName(body.handle_name);
        navigate(Route.PROBLEM);
      } else {
        // TODO: Error Handling!
      }
      setIsLoading(false);
    })().then().catch();
  };
  return (
    isLoading ? (
      <button disabled>로딩 중...</button>
    ) : (
      <button onClick={onClick}>시작/이어하기</button>
    )
  );
};

export default Home;
