import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

import girl from "./girl.svg";
import sakura from "./sakura.svg";
import bullet from "./bullet.svg";

const Wrapper = styled.section`
  height: 1123px;
  width: 100%;
  position: relative;
  background-color: #fcfdff;
  color: #5e6590;
  font-weight: 400;
  line-height: 1.56;
  padding-top: 60px;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  color: #3b426c;
  line-height: 1.56;
  font-size: 20px;
  margin-bottom: 16px;
  margin-top: 24px;

  @media (min-width: 576px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;

  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

const List = styled.div`
  max-width: 600px;
`;

const Bg = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Blue = styled.div`
  width: 50%;
  height: 100%;
`;

const Girl = styled.div`
  background-color: #fcfdff;
  background-image: none;
  background-repeat: no-repeat;
  background-position: top left;
  width: 50%;
  height: 100%;
  display: block;

  @media (min-width: 768px) {
    background-image: url(${girl});
  }
`;

const Sakura = styled.div`
  background-image: url(${sakura});
  background-repeat: no-repeat;
  background-position: bottom right;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Bullet = styled.li`
  display: inline-block;
  position: relative;
  padding-left: 24px;
  padding-top: 16px;
  font-size: 14px;

  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

const Mark = styled.li`
  content: url(${bullet});
  margin-left: -24px;
  margin-top: 16px;
  top: 3px;
  position: absolute;
  transition: 0.4s ease-in-out;
`;

const CustomLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1.5px;
  color: #3a416f;
  transition: 0.16s ease-in-out;

  &:hover {
    color: #ff7e63;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 32px;
  text-transform: uppercase;
  border-radius: 56px;
  border: none;
  padding: 16px 24px;
  font-size: 11px;
  letter-spacing: 1.5px;
  color: #fff5f5;
  cursor: pointer;
  transition: 0.16s ease-in-out;
  background: linear-gradient(90deg, #ff8c8c 0%, #ffb0b1 100%);
  box-shadow: 0px 4px 8px rgba(104, 85, 128, 0.08);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 16px rgba(104, 85, 128, 0.16);
  }

  @media (min-width: 576px) {
    margin-left: 24px;
  }
`;

export default function() {
  return (
    <Wrapper id="demands">
      <Bg>
        <Blue />
        <Girl data-aos="fade-left" />
        <Sakura data-aos="fade-up-left" />
      </Bg>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-6 z-1">
            <List>
              <Paragraph>
                Мы&nbsp;ищем общительных девушек с&nbsp;приятной внешностью
                <br />
                от&nbsp;18&nbsp;до&nbsp;32-х лет, ростом не&nbsp;выше
                180&nbsp;сантиметров.
              </Paragraph>
              <Subtitle>
                Претендентки на&nbsp;должность хостес <br />
                должны соответствовать следующим критериям:
              </Subtitle>
              <ul>
                <Bullet>
                  <Mark data-aos="zoom-out-up" data-aos-duration="750" />
                  привлекатьльная внешность и хорошая <br />
                  физическая форма;
                </Bullet>
                <Bullet>
                  <Mark data-aos="zoom-out-up" data-aos-duration="1000" />
                  красивый голос, грамотная речь <br />и отсутствие дефектов
                  дикции;
                </Bullet>
                <Bullet>
                  <Mark data-aos="zoom-out-up" data-aos-duration="1250" />
                  общительность и доброжилательность;
                </Bullet>
                <Bullet>
                  <Mark data-aos="zoom-out-up" data-aos-duration="1500" />
                  стрессоустойчевость и внимательность
                </Bullet>
              </ul>
              <CustomLink smooth to="#mail">
                <Button>Заполнить анкету</Button>
              </CustomLink>
            </List>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
