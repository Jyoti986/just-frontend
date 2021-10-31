import React from "react";
import css from "./container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const like = <FontAwesomeIcon icon={faHeart} />;
const comment = <FontAwesomeIcon icon={faComment} />;
const share = <FontAwesomeIcon icon={faShareAlt} />;

const Container = () => {
  return (
    <>
      <section className={css.feed}>
        <section className={css.post_container}>
          <div className={css.user}>
            <div className={css.profile_img}>
              <img src="../../images/loginSign.jpg" alt="" />
            </div>
            <div className={css.username}>
              <span>johnnyboy</span>
            </div>
          </div>
          <div className={css.post}>
            <img src="https://picsum.photos/200/300" alt="temp" />
            <div className={css.post_icons}>
              <div className={css.post_icon}>
                <a href="/">
                  <span className={`${css.icon} ${css.active}`}>{like}</span>
                  2.25k
                </a>
                <a href="/">
                  <span className={css.icon}>{comment}</span>
                  330
                </a>
              </div>
              <a href="/">
                <span className={css.icon}>{share}</span>
                174
              </a>
            </div>
          </div>
          <figcaption className={css.img_caption}>
            johnnyboy <span> Lorem ipsum dolor sit amet.</span>
          </figcaption>
        </section>

        <section className={css.post_container}>
          <div className={css.user}>
            <div className={css.profile_img}>
              <img src="../../images/loginSign.jpg" alt="" />
            </div>
            <div className={css.username}>
              <span>johnnyboy</span>
            </div>
          </div>
          <div className={css.post}>
            <img src="https://picsum.photos/300/200" alt="temp" />
            <div className={css.post_icons}>
              <div className={css.post_icon}>
                <a href="/">
                  <span className={`${css.icon}`}>{like}</span>
                  2.25k
                </a>
                <a href="/">
                  <span className={css.icon}>{comment}</span>
                  330
                </a>
              </div>
              <a href="/">
                <span className={css.icon}>{share}</span>
                174
              </a>
            </div>
          </div>
          <figcaption className={css.img_caption}>
            johnnyboy <span> Lorem ipsum dolor sit amet.</span>
          </figcaption>
        </section>
      </section>
    </>
  );
};

export default Container;
