import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  border-radius: 15px;
  border: 1px solid pink;
  background-color: #ffe6f2; /* Light pink background */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  h2 {
    color: #ff66b2; /* Pinkish color for the title */
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    color: #cc0066; /* Darker pink for text */
    font-size: 1rem;
    margin: 0.2rem 0;
  }
`;

export default function WeatherCard(props: Weather) {
    return (
        <WeatherCardWrapper>
            <h2>{props.datetime}</h2>
            <p>Conditions: {props.conditions}</p>
            <p>Description: {props.description}</p>
            <p>
                Temp: {props.tempmin}° - {props.tempmax}°
            </p>
        </WeatherCardWrapper>
    );
}
