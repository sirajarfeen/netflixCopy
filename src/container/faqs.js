import React from 'react';
import { Accordian } from '../components';
import OptForm from '../components/optForm';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer(){
    return(
        <Accordian>
            <Accordian.Title>Frequently Asked Question</Accordian.Title>
            {faqsData.map((item) =>(
                <Accordian.Item key={item.id}>
                    <Accordian.Header>{item.header}</Accordian.Header>
                    <Accordian.Body>{item.body}</Accordian.Body>
                </Accordian.Item>
            ))}
            <Accordian.Item />

            <OptForm>
                <OptForm.Input placeholder="Enter the mail" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch?</OptForm.Text>
            </OptForm>
        </Accordian>
    )
}