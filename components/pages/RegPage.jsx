const React = require('react');
const Layout = require('../Layout');
const FormElem = require('../elements/FormElem');

function RegPage({ title }) {
  return (
    <>
      <Layout title={title}>
        <FormElem classForm={'registration'}>
    
         
            <input name='re_password' type='password' required placeholder='password repeat'/>
        

            <input name='email' type='email' required placeholder='email'/>

          <button className='btnreg' type='submit'>Зарегистрироваться</button>
        </FormElem>
      </Layout>
    </>
  );
}

module.exports = RegPage;
