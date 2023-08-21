import { programEnum } from "./home";
import { createStore } from "solid-js/store";
import { useParams } from "@solidjs/router";

interface StateType {
  height: number | null;
  weight: number | null;
  desired_weight?: number | null;
  time_frame: number | null;
  bmi: number | null;
  program: string | null;
  curr_kcal: number | null;
}

export default function UserInput() {
  const type = JSON.stringify(useParams().type);
  const [state, setState] = createStore<StateType>({
    height: null,
    weight: null,
    desired_weight: null,
    time_frame: null,
    bmi: null,
    program: type,
    curr_kcal: null
  });
  return (
    <div class="main">
      <label for='height'>Height (in cm)</label>
      <input
        type='number'
        id='height'
        class='input input-bordered input-accent w-full max-w-xs'
        step='10'
        value={state.height === null ? "" : state.height}
        onChange={(event) => {
          if (event.target !== null) {
            setState("height", parseInt(event.target.value));
          }
        }}
      />
      <label for='weight'>Weight (in kg)</label>
      <input
        type='number'
        id='weight'
        class='input input-bordered input-accent w-full max-w-xs'
        step='10'
        value={state.weight === null ? "" : state.weight}
        onChange={(event) => {
          if (event.target !== null) {
            setState("weight", parseInt(event.target.value));
          }
        }}
      />
      {(JSON.parse(type) === programEnum.FAL_LOSS) && (
        <>
          <label for='desired_weight'>Desired Weight (in kg)</label>
          <input
            type='number'
            id='desired_weight'
            class='input input-bordered input-accent w-full max-w-xs'
            step='10'
            value={state.desired_weight === null ? "" : state.desired_weight}
            onChange={(event) => {
              if (event.target !== null) {
                setState("desired_weight", parseInt(event.target.value));
              }
            }}
          />
        </>
      )}
      {(JSON.parse(type) === programEnum.MUSCLE || JSON.parse(type) === programEnum.FAL_LOSS) && (
        <>
          <label for='time_frame'>Time Frame (in weeks)</label>
          <input
            type='number'
            id='time_frame'
            class='input input-bordered input-accent w-full max-w-xs'
            min={
              state.desired_weight
                //@ts-ignore
                ? (state.desired_weight - state.weight) * 2
                : ""
            }
            value={state.time_frame === null ? "" : state.time_frame}
            onChange={(event) => {
              if (event.target !== null) {
                setState("time_frame", parseInt(event.target.value));
              }
            }}
          />
        </>
      )}
      <label for='bmi'>BMI</label>
      <input
        type='number'
        id='bmi'
        class='input input-bordered input-accent w-full max-w-xs'
        step='10'
        value={state.bmi === null ? "" : state.bmi}
        onChange={(event) => {
          if (event.target !== null) {
            setState("bmi", parseInt(event.target.value));
          }
        }}
      />
      <label for='curr_kcal'>Maintaince Kcal</label>
      <input
        type='number'
        id='curr_kcal'
        class='input input-bordered input-accent w-full max-w-xs'
        step='100'
        value={state.curr_kcal === null ? "" : state.curr_kcal}
        onChange={event => {
          if (event.target != null) {
            setState("curr_kcal", parseInt(event.target.value))
          }
        }} />

      <button type='submit' class='btn w-80 btn-outline btn-accent mt-4'>
        Submit
      </button>
      {JSON.parse(type) === programEnum.MUSCLE && <p class="-mb-20 mt-4 text-accent-content text-[12px]">*Amount of muscle gained in a given time frame varies from person to person </p>}
    </div>
  );
}
