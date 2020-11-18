/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactElement, useContext } from "react";
import ErrorResponse from "./ErrorResponse";
import { CastContext, ShowContext } from "./ShowPage";
import {
  singleShowDetailWrapper,
  headerText,
  showInfoWrapper,
  starringWrapper,
  starringWrapper__Content,
  starringWrapper__Content__icon,
} from "./styles/singleShowDetail";

export default function SingleShowDetail(): ReactElement {
  const show = useContext(ShowContext);
  const cast = useContext(CastContext);

  if ((show && "error" in show) || (cast && "error" in cast)) {
    return <ErrorResponse />;
  }
  const { schedule, status, genres, network } = show || {};

  return (
    <div css={singleShowDetailWrapper}>
      <div className="SingleShowDetail-showinfo">
        <p css={[headerText]}>Show Info</p>
        <div css={showInfoWrapper}>
          <div>
            <p>Streamed on</p>
            <p>{network && network.name}</p>
          </div>
          <div>
            <p>Schedule</p>
            <span>
              {schedule && schedule.days.map((day) => <p key={day}>{day}</p>)}
            </span>
          </div>
          <div>
            <p>Status</p>
            <p>{status}</p>
          </div>
          <div>
            <p>Genres</p>
            <p>
              <span>
                {genres?.map((genre) => (
                  <p key={genre}>{genre}</p>
                ))}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div css={starringWrapper}>
        <p
          css={[
            headerText,
            css`
              margin-bottom: 16px;
            `,
          ]}
        >
          Starring
        </p>
        <div css={starringWrapper__Content}>
          {(cast || Array(4).fill("")).map((castData, index) => {
            let { person, character } = castData || {};
            let {
              name,
              image: { original },
            } = person || { image: { original: "" } };
            character = character || {};
            return (
              <div key={name + character + index}>
                <i css={starringWrapper__Content__icon(original)}></i>
                <div>
                  <p>{name || null}</p>
                  <p>{character.name || null}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
