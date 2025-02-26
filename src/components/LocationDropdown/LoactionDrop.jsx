import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import Slide from '@mui/material/Slide';
import React from 'react';
import { MyContext } from '../../App';


const Transition = React.forwardRef(function Transition(
    props,
    ref
) {
    return <Slide direction="up" ref={ref} {...props} />;
});




const LocationDrop = () => {

    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);

    const [stateList, setstateList] = useState([]);

    const context = useContext(MyContext);


    const selectState = (index, item) => {
        setselectedTab(index);

        setisOpenModal(false);
        context.setselectedArea(item)
    }

    useEffect(() => {
        setstateList(context.stateList);
    }, [])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        if (keyword !== '') {
            const list = stateList.filter((item) => {
                return item.toLowerCase().includes(keyword)
            });
            setstateList(list);
        } else {
            setstateList(context.stateList);

        }


    }

    return (
        <>
            <Button className="stateDrop" onClick={() => { setisOpenModal(true) }}>
                <div className="info d-flex flex-column">
                    <span className='lable'>Your Location</span>
                    <span className='name'>
                        {context.selectedArea !== "" ? context.selectedArea : "Select Area"}
                    </span>

                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => { setisOpenModal(false) }} className='locationModal' TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose your Delivary Loaction</h4>
                <p>Enter your adress and we will check availabe delivary area.</p>
                <Button className='close_' onClick={() => { setisOpenModal(false) }}><MdClose /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area..." onChange={filterList} />
                    <Button><IoIosSearch /></Button>
                </div>

                <ul className='stateList mt-3'>
                    {
                        stateList?.length !== 0 && stateList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectState(index, item)} className={`${selectedTab === index ? 'active' : ''}`}>{item}</Button></li>

                            )
                        })
                    }

                </ul>
            </Dialog>

        </>

    )
}

export default LocationDrop;