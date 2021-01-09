import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { RouteComponentProps, navigate } from '@reach/router';

import { CentralizedRow, Button, Paragraph } from '@/styles';
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
    <>
      <CentralizedRow>
        <h2 style={{ color: '#cccccc' }}>LoveLive! Sunshine!! 음악 퀴즈</h2>
      </CentralizedRow>
      <CentralizedRow>
        <div>
          <Paragraph>주어지는 문제 음원을 듣고 곡을 맞추면 되는 게임입니다.</Paragraph>
          <Paragraph>틀릴 때까지 계속해서 문제가 출제되며, 5문제 단위로 난이도가 상승합니다.</Paragraph>
          <Paragraph>곡의 10~180초 지점을 랜덤하게 선택해 난이도별 길이만큼 자른 음원이 문제로 출제됩니다.</Paragraph>
          <Paragraph><strong>세이브 데이터는 3일 동안만 유지됩니다.</strong></Paragraph>
        </div>
      </CentralizedRow>
      <CentralizedRow>
        {isLoading ? (
          <Button disabled>로딩 중...</Button>
        ) : (
          <Button onClick={onClick}>시작하기</Button>
        )}
      </CentralizedRow>
    </>
  );
};

export default Home;
