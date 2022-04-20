import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carsServices} from "../../Services";

const CarForm = ({setNewCar, carForUpdate}) => {
    const [formError, setFormError] = useState([]);
    const {register, reset, handleSubmit, setValue} = useForm();

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model',model);
            setValue('price',price);
            setValue('year',year);
        }
    }, [carForUpdate,setValue]);


    const submit = async (Car) => {
        try {
            if (carForUpdate) {
                const {data} = await carsServices.updateCar(carForUpdate.id, Car);
                setNewCar(data);
            } else {
                const {data} = await carsServices.newCar(Car);
                setNewCar(data);
            }
            reset();
        } catch (e) {
            setFormError(e.response.data);
        }

    }

    return (
        <div className="sec_form">
            <form onSubmit={handleSubmit(submit)}>
                <div className="input">
                    <label>
                        <h2>Model:</h2>
                        <input type="text" {...register('model')}/>
                        {formError.model && <span>{formError.model[0]}</span>}
                    </label>
                </div>
                <div className="input">
                    <label>
                        <h2>Price:</h2>
                        <input type="text" {...register('price', {valueAsNumber: true})}/>
                        {formError.price && <span>{formError.price[0]}</span>}
                    </label>
                </div>
                <div className="input">
                    <label>
                        <h2>Year:</h2>
                        <input type="text" {...register('year', {valueAsNumber: true})}/>
                        {formError.year && <span>{formError.year[0]}</span>}
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default CarForm;
