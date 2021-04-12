import { history } from '@/.umi/core/history';
// import { history } from 'umi';

function IndexPage() {
  return (
    <div>
      <button onClick={() => history.push('/user')}>user</button>
    </div>
  );
}

export default IndexPage;
