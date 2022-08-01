import React from 'react'
import { MainCard, MainContainer, Text, StatusBar, Timer } from './card.styles';
import { StatusCardType, StatusStateType, ErrorStateType } from './type';
import { useEffect, useState } from 'react';
import { getCurrentStatus } from '../../utils/axios';
import moment from 'moment';

const StatusCard = ({ endpoint }: StatusCardType) => {
  const [status, setStatus] = useState<StatusStateType>()
  const [error, setError] = useState<ErrorStateType>()
  
  const newTime = moment(status?.time).format('LTS'); 

  useEffect(() => {
      getCurrentStatus(setError, endpoint)
        .then(status => {
          setStatus(status)
        })
      const timer = setInterval(() => {
        getCurrentStatus(setError, endpoint)
          .then(status => {
            setStatus((prev) => prev = status)
          })
      }, 15000); //timer for api refresh

      return () => clearInterval(timer);
    }, [])

  return (
    <>
      <MainContainer>
        {status &&
          <>
            <MainCard>
              <Text as={'h3'}>
                {endpoint}
              </Text>
              <StatusBar>
                {status?.message.split(':3')}
              </StatusBar>
              <div>
                <Text>
                  {status?.hostname}
                </Text>
                <Timer>
                  {newTime}
                </Timer>
              </div>
            </MainCard>
          </>
        }
        {
          error && <>
            <MainCard>
              <Text as={'h3'}>
                {endpoint}
              </Text>
              <StatusBar error>
                Error
              </StatusBar>
              <div>
                <Text>
                  {error?.message}
                </Text>
                <Timer>
                  {error?.body}
                </Timer>
              </div>
            </MainCard>
          </>
        }
      </MainContainer>
    </>
  )
}

export default StatusCard