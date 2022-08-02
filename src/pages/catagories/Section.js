import React from 'react';
import { Link } from 'react-router-dom';
const Section = ({ title, sectionId, subCatId, parentId, itemSpecificsForm }) => {
  return (
    <>
      <section id={sectionId} className="catagerios_menu">
        <Link
          to={{
            // pathname: `/catagoriesDetails/:${subCatId}`,
            state: title,
            parentId: parentId,
          }}
        >
          <h2>{title}</h2>
        </Link>
        <div className="catagerios_list">
          {itemSpecificsForm &&
            itemSpecificsForm.map((item) => (
              <div className="catagerios_item">
                <ul>
                  <Link
                    to={{
                      pathname: `/catagoriesDetails/:${item.id}`,
                      state: title,
                      parentId: item.parentId,
                    }}
                  >
                    {' '}
                    <li>{item.name}</li>
                  </Link>
                </ul>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
export default Section;
