import React, { useState } from 'react';
import './style.css';
import { DonateForm } from './DonateForm/index.jsx';
import { regions } from '../../config.js';
import './DonateForm/style.css';
import ShowMoreText from 'react-show-more-text';
import { Pagination } from '../Pagination/index.jsx';

export const Donate = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [expanded, setExpanded] = useState('true');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  //filter regions
  const filteredItems = props.items.filter((item) => {
    if (!selectedRegion) return true;
    return item.region === selectedRegion;
  });

  //expand text in ads
  const expandOnClick = () => {
    setExpanded(!expanded);
  };

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredItems.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="donate__containe">
      <div className="donate__opening">
        <p className="donate__opening__h">Dejte svému počítači druhou šanci</p>
        <p className="donate__opening__p">
          Válí se vám doma ve sklepě zánovní, ale stále funkční, počítač?
          Dostali jste od Ježíška nový notebook a marně přemýšlíte, co s tím
          starým? Nebo v práci pravidelně obnovujete IT techniku a starší
          počítače už nemají využití? Máme pro vás řešení! Vdechněte vašim
          nevyužitým počítačům druhý dech a nabídněte je dál žákům a studentům,
          kterým usnadníte jejich vzdělávání.{' '}
        </p>
        <p className="donate__opening__lastP">
          Podívejte se, kdo shání počítač.
        </p>
      </div>
      <div className="donate__ads">
        <p className="donate__ads--p">Vyber, komu pomůžeš</p>
        <div className="rd__mobile">
          <div className="div__select">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="donate__form--select"
              required
            >
              {regions.map((region) => (
                <option value={region.value}>{region.label}</option>
              ))}
            </select>
          </div>

          {currentPosts.map((item) => (
            <>
              <div className="result">
                <div className="result__items">
                  <div className="result__items--item">
                    <label className="result__items--label">
                      Název školy: {''}
                    </label>
                    {item.school}
                  </div>
                  <div className="result__items--item">
                    <label className="result__items--label">
                      Adresa školy: {''}
                    </label>
                    {item.school_adress}
                  </div>
                  <div className="result__items--item">
                    <label className="result__items--label">
                      Poptávka: {''}
                    </label>
                    {item.request}
                  </div>
                  <div className="result__items--message">
                    <label className="result__items--label">Vzkaz: {''}</label>
                    {item.info}
                  </div>
                </div>
                <div className="result__donate">
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedContact(item.contact_email);
                    }}
                    className="result__button"
                  >
                    Chci pomoci
                  </button>
                </div>
              </div>

             {/*  <div className="result__checkbox" key={item.id}>
                <button
                  className="result__checkbox--btn"
                  onClick={() => {
                    db.collection('chci_pocitac').doc(item.id).delete();
                  }}
                >
                  SMAZAT INZERÁT
                </button>
              </div> */}
            </>
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredItems.length}
            paginate={paginate}
          />
        </div>
        <div className="rd__desktop">
          <>
            <div className="div__select">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="donate__form--select desktop"
                required
              >
                {regions.map((region) => (
                  <option value={region.value}>{region.label}</option>
                ))}
              </select>
            </div>
            <div className="result">
              <table className="result__table">
                <thead className="result__table--headers">
                  <tr>
                    <th className="result__table--header">Název školy</th>
                    <th className="result__table--header">Adresa školy</th>
                    <th className="result__table--header">Poptávka</th>
                    <th className="result__table--header">Vzkaz</th>
                    <th className="result__table--header"></th>
                  </tr>
                </thead>
                {currentPosts.map((item) => (
                  <tbody className="result_ads">
                    <tr className="tableRow">
                      <td className="result__table--item">{item.school}</td>
                      <td className="result__table--item">
                        {item.school_adress}
                      </td>
                      <td className="result__table--item">{item.request}</td>

                      <td className="result__table--item">
                        <ShowMoreText
                          lines={3}
                          more="Více..."
                          less="Méně"
                          anchorClass="my-anchor-css-class"
                          onClick={expandOnClick}
                          expanded={false}
                          width={300}
                        >
                          {item.info}
                        </ShowMoreText>
                      </td>

                      <td className="result__table--button">
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            setIsModalOpen(true);
                            setSelectedContact(item.contact_email);
                          }}
                          className="result__button"
                        >
                          Chci pomoci
                        </button>
                        {/* <div className="result__checkbox" key={item.id}>
                          <button
                            className="result__checkbox--btn"
                            onClick={() => {
                              db.collection('chci_pocitac')
                                .doc(item.id)
                                .delete();
                            }}
                          >
                            SMAZAT INZERÁT
                          </button>
                        </div> */}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={filteredItems.length}
              paginate={paginate}
            />
          </>
        </div>
      </div>
      <DonateForm
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        selectedContact={selectedContact}
      />
    </div>
  );
};

/*
  {item.contact_email}

<input
                  type="checkbox"
                  checked={item.state}
                  onChange={(event) => {
                    db.collection('chci_pocitac').doc(item.id).update({
                      state: event.target.checked,
                    });
                  }}
                />
                
                <div className="result__checkbox" key={item.id}>
                <button
                  className="result__checkbox--btn"
                  onClick={() => {
                    db.collection('chci_pocitac').doc(item.id).delete();
                  }}
                >
                  SMAZAT INZERÁT
                </button>
              </div>
                

                */
