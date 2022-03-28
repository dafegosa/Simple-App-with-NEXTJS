import fetch from 'isomorphic-fetch';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import Template from '../../components/template'

const UserProfile = ({ user }) => {
  console.log(user);
  return (
    <>
      <head>
        <title>{ user.first_name }</title>
      </head>
      <Template>
        <div className='row justify-content-center'>
            <div className="card" style={{width: "18rem"}}>
              <img src={user.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">{ user.first_name } {user.last_name}</h5>
                <p className="card-text text-center">{user.email}</p>
                <Link href="/" >
                  <a className="btn btn-secondary btn-sm w-100">
                    Go Back
                  </a>
                </Link>
              </div>
            </div>
        </div>
      </Template>
    </>
  )
}

export default UserProfile;

UserProfile.getInitialProps = async (ctx) => {
  const resp = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
  const respJSON = await resp.json();
  return { user: respJSON.data };
}
