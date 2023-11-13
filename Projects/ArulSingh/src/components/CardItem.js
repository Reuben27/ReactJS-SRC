import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramEmbed } from 'react-social-media-embed';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <div className='cards__item__embed'>
              <div className='instagram-embed-container'>
                <InstagramEmbed
                  url={props.instagramUrl}
                  type="instagram"
                  // You can customize the appearance of the embedded content with additional props
                />
              </div>
            </div>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
