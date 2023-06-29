import React from 'react';
import { Form, Input, Button } from 'reactstrap';


export default function SearchForm() {
    return (
        <Form className='form'>
            <div className='logo'></div>
            <Input />
            <Button>Найти</Button>
        </Form>
        // <div className='search__form'>
        /* <form className='form'>
            <div className='search'>
                <input
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Найти
            </button>
        </form> */
        // </div >
    )
}