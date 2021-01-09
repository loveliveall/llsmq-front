import { FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { RouteComponentProps, navigate } from '@reach/router';
import Select, { createFilter } from 'react-select';

import { CentralizedRow, Paragraph, Button } from '@/styles';

import { API_ENDPOINT } from '@/const';
import { Route } from '@/routes';
import { songlist, optionsForSelect } from '@/songlist';

import { getHandleName } from '@/utils';

interface GenProblemResponse {
  q_no: number,
  asset_path: string,
}

interface ScoreResult {
  ok: boolean,
  corrected: number,
  answer_id?: string,
}

function getProblemSec(qNo: number) {
  if (qNo <= 5) return 3;
  if (qNo <= 10) return 2;
  if (qNo <= 15) return 1.5;
  if (qNo <= 20) return 1;
  if (qNo <= 25) return 0.75;
  return 0.5;
}

interface SelectOption {
  value: string,
  label: string,
}

const INITIAL_SELECTED = {
  value: 'A0001',
  label: songlist['A0001'],
}

const Problem: FunctionComponent<RouteComponentProps> = () => {
  const [isLoadingProblem, setIsLoadingProblem] = useState(false);
  const [problem, setProblem] = useState({
    qNo: 0,
    assetPath: '',
  })
  const [selected, setSelected] = useState(INITIAL_SELECTED);
  const [isResultShowing, setIsResultShowing] = useState(false);
  const [isLoadingResult, setIsLoadingResult] = useState(false);
  const [result, setResult] = useState<ScoreResult>({
    ok: true,
    corrected: 0,
  });

  const fetchProblem = async () => {
    const handleName = getHandleName();
    if (handleName === null) {
      navigate(Route.HOME);
      return;
    }
    setIsLoadingProblem(true);
    const res = await fetch(`${API_ENDPOINT}/gen-problem`, {
      method: 'GET',
      headers: {
        'X-Handle-Name': handleName,
      },
    });
    if (res.ok) {
      const body = await res.json() as GenProblemResponse;
      setProblem({
        qNo: body.q_no,
        assetPath: body.asset_path,
      });
    } else {
      navigate(Route.HOME);
    }
    setIsLoadingProblem(false);
  };

  const onSubmitClick = () => {
    (async () => {
      const handleName = getHandleName();
      if (handleName === null) {
        navigate(Route.HOME);
        return;
      }
      setIsLoadingResult(true);
      const res = await fetch(`${API_ENDPOINT}/score-it`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Handle-Name': handleName,
        },
        body: JSON.stringify({
          'answer': selected.value,
        }),
      });
      if (res.ok) {
        const body = await res.json() as ScoreResult;
        setResult(body);
        setIsResultShowing(true);
      } else {
        navigate(Route.HOME);
      }
      setIsLoadingResult(false);
    })()
  }

  const onNextProblem = () => {
    setIsResultShowing(false);
    setSelected(INITIAL_SELECTED);
    fetchProblem();
  }

  const goHome = () => {
    navigate(Route.HOME);
  }

  useEffect(() => {
    // Auto load problem on initial page load
    fetchProblem();
  }, [])

  const { answer_id } = result;

  return (
    <div>
      {/* Problem Section */}
      {isLoadingProblem ? (
        <CentralizedRow>
          <Paragraph>문제 생성 중...</Paragraph>
        </CentralizedRow>
      ) : (
        <>
          <CentralizedRow>
            <h2 style={{ color: '#cccccc' }}>{`${problem.qNo}번째 문제`}</h2>
          </CentralizedRow>
          <CentralizedRow>
            <Paragraph>{`문제 길이: ${getProblemSec(problem.qNo)}초`}</Paragraph>
          </CentralizedRow>
          <CentralizedRow>
            <audio src={problem.assetPath} controls>
              HTML audio tag is not supported
            </audio>
          </CentralizedRow>
        </>
      )}
      {/* Answer & result section */}
      {isResultShowing ? (
        result.ok ? (
          <>
            <CentralizedRow>
              <div>
                <Paragraph>정답입니다 ٩(๑＞◡＜๑)۶</Paragraph>
                <Paragraph>{`연속으로 ${result.corrected} 문제를 맞추셨습니다!`}</Paragraph>
              </div>
            </CentralizedRow>
            <CentralizedRow>
              <Button onClick={onNextProblem}>다음 문제 풀기</Button>
            </CentralizedRow>
          </>
        ) : (
          <>
            <CentralizedRow>
              <div>
                <Paragraph>틀렸습니다 ｡°(´∩ω∩`)°｡</Paragraph>
                {answer_id && (
                  <Paragraph>{`정답은 ${songlist[answer_id as keyof typeof songlist]} 입니다 (*ﾟДﾟ)`} </Paragraph>
                )}
                <Paragraph>{`연속으로 총 ${result.corrected} 문제를 맞추셨습니다!`}</Paragraph>
              </div>
            </CentralizedRow>
            <CentralizedRow>
              <Button onClick={goHome}>처음으로 돌아가기</Button>
            </CentralizedRow>
          </>
        )
      ) : (
        <>
          <CentralizedRow>
            <div style={{ width: '500px' }}>
              <Select
                value={selected}
                onChange={(e: SelectOption) => setSelected(e)}
                options={optionsForSelect}
                filterOption={createFilter({
                  matchFrom: 'any',
                  stringify: o => `${o.label}`,
                })}
              />
            </div>
          </CentralizedRow>
          <CentralizedRow />
          <CentralizedRow>
            <Button onClick={onSubmitClick} disabled={isLoadingResult || isLoadingProblem}>제출</Button>
          </CentralizedRow>
        </>
      )}
    </div>
  );
};

export default Problem;
