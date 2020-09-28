import React from 'react';
import  OptForm  from '../components/optForm';
import Feature from '../components/feature';
import { HeaderContainer } from '../container/header';
import { FaqsContainer } from '../container/faqs';
import { FooterContainer } from '../container/footer';
import { JumbotronContainer } from '../container/jumbotron';

export default function Home(){
    return(
        <>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                <Feature.SubTitle>
                    watch anywhere. Cancel at any time.
                </Feature.SubTitle>
                <OptForm>
                <OptForm.Input placeholder="Enter the mail" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch?</OptForm.Text>
            </OptForm>
                </Feature>
            

            </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
           
            
        </>
    )
}