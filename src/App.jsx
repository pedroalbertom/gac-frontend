import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';

// --- COMPONENTES DE PÁGINA ---

const Login = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        padding: '50px', 
        backgroundColor: '#f9f9f9',
        borderRight: '1px solid #ddd'
      }}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}> 
          <h1>GAC Unifor</h1>
          <p>Gestão de Ativos e Chaves</p>
          
          <h3>Faça seu login</h3>
          <form onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="matricula" style={{ display: 'block', marginBottom: '5px' }}>Matrícula:</label>
              <input 
                id="matricula"
                type="text" 
                placeholder="Digite sua matrícula" 
                required 
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="senha" style={{ display: 'block', marginBottom: '5px' }}>Senha:</label>
              <input 
                id="senha"
                type="password" 
                placeholder="Digite sua senha" 
                required 
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
              />
            </div>
            
            <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
              Entrar no Sistema
            </button>
          </form>
          
          <p style={{ marginTop: '20px', fontSize: '0.9em' }}>
            Esqueceu a senha? <a href="#">Clique aqui</a>.
          </p>
        </div>
      </div>

      <div style={{ 
        flex: 1,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        padding: '50px', 
        backgroundColor: '#fff', 
        color: '#333'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2>Bem-vindo ao GAC</h2>
          <p>
            O Sistema de Gestão de Ativos e Chaves (GAC) da Unifor foi desenvolvido para 
            facilitar o controle e a reserva de equipamentos e espaços da universidade.
          </p>
          
          <h3>Funcionalidades Principais:</h3>
          <ul>
            <li>Reserva online de projetores e outros equipamentos.</li>
            <li>Controle de retirada e devolução de chaves de laboratórios.</li>
            <li>Histórico completo de utilizações por professor/funcionário.</li>
            <li>Relatórios de disponibilidade em tempo real.</li>
          </ul>
          
          <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ffcc00', backgroundColor: '#fffbe6' }}>
            <strong>Aviso:</strong> Para primeiro acesso ou problemas com a senha, 
            entre em contato com o suporte da TI no bloco M ou ramal 1234.
          </div>
        </div>
      </div>
      
    </div>
  );
};

const Dashboard = () => (
  <div>
    <h2>Dashboard - Resumo Geral</h2>
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <strong>Projetores Disponíveis:</strong> 12
      </div>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <strong>Chaves Emprestadas:</strong> 5
      </div>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <strong>Pendências:</strong> 2
      </div>
    </div>
    <h3>Alertas</h3>
    <ul>
      <li>Projetor #042 está com manutenção atrasada.</li>
      <li>Chave Lab 05 não foi devolvida no horário previsto.</li>
    </ul>
  </div>
);

const Projetores = () => (
  <div>
    <h2>Inventário de Projetores</h2>
    <table border="1" style={{ width: '100%', textAlign: 'left' }}>
      <thead>
        <tr>
          <th>Patrimônio</th>
          <th>Marca/Modelo</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#123456789</td>
          <td>Epson PowerLite</td>
          <td>Disponível</td>
          <td><button>Emprestar</button><button>Editar</button></td>
        </tr>
        <tr>
          <td>#987654321</td>
          <td>BenQ MX550</td>
          <td>Em Uso</td>
          <td><button>Detalhes</button><button>Editar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Chaves = () => {
  const chaves = [
    { id: 'C1', sala: '08', bloco: 'J', status: 'Disponível' },
    { id: 'C2', sala: '11', bloco: 'J', status: 'Emprestada' },
    { id: 'C3', sala: '02', bloco: 'C', status: 'Disponível' },
    { id: 'C3', sala: '05', bloco: 'I', status: 'Disponível' },
    { id: 'C3', sala: '12', bloco: 'I', status: 'Disponível' },
  ];

  return (
    <div>
      <h2>Inventário de Chaves</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {chaves.map(c => (
          <div key={c.id} style={{ border: '1px solid gray', padding: '15px', width: '180px' }}>
            <h3>Sala: {c.sala}</h3>
            <p>Bloco: {c.bloco}</p>
            <p><strong>{c.status}</strong></p>
            <button disabled={c.status === 'Emprestada'}>Retirar Chave</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Movimentacoes = () => {
  const [historico] = useState([
    { id: 1, item: 'Projetor #004', pessoa: 'Prof. Ricardo', data: '09/05/2026', acao: 'Saída' },
    { id: 2, item: 'Chave Lab 01', pessoa: 'Tec. Mariana', data: '09/05/2026', acao: 'Devolução' },
  ]);

  return (
    <div>
      <h2>Registro de Movimentações</h2>
      <fieldset style={{ marginBottom: '20px' }}>
        <legend>Novo Registro</legend>
        <input type="text" placeholder="Nome/Matrícula" />
        <select>
          <option>Selecione o Ativo...</option>
          <option>Projetor Epson #041</option>
          <option>Chave Lab 01</option>
        </select>
        <button onClick={() => alert('Movimentação salva!')}>Registrar</button>
      </fieldset>

      <h3>Histórico de Hoje</h3>
      <table border="1" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Horário/Data</th>
            <th>Ativo</th>
            <th>Solicitante</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {historico.map(m => (
            <tr key={m.id}>
              <td>{m.data}</td>
              <td>{m.item}</td>
              <td>{m.pessoa}</td>
              <td>{m.acao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Usuarios = () => {
  const [users, setUsers] = useState([
    { id: 1, nome: 'Fulano Detal', cargo: 'Atendente', matricula: '123456' },
    { id: 2, nome: 'Admin Master', cargo: 'Coordenador', matricula: '000001' },
    { id: 3, nome: 'Professor Ciclano', cargo: 'Professor', matricula: '654321' },
  ]);

  const addUser = () => {
    const nome = prompt("Nome do usuário:");
    if (nome) {
      setUsers([...users, { id: Date.now(), nome, cargo: 'Novo', matricula: '------' }]);
    }
  };

  return (
    <div>
      <h2>Gestão de Usuários (CRUD)</h2>
      <button onClick={addUser}>Adicionar Novo Usuário</button>
      <ul style={{ marginTop: '20px' }}>
        {users.map(u => (
          <li key={u.id} style={{ marginBottom: '10px' }}>
            {u.nome} - {u.cargo} ({u.matricula}) 
            <button style={{ marginLeft: '10px' }}>
              Editar
            </button>
            <button style={{ marginLeft: '10px' }} onClick={() => setUsers(users.filter(user => user.id !== u.id))}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- COMPONENTE DE LAYOUT (SIDEBAR + CONTEÚDO) ---

const MainLayout = () => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <aside style={{ width: '220px', backgroundColor: '#f0f0f0', padding: '20px', borderRight: '1px solid #ccc' }}>
      <h2>GAC</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '8px 0' }}><Link to="/dashboard">Dashboard</Link></li>
          <li style={{ padding: '8px 0' }}><Link to="/projetores">Projetores</Link></li>
          <li style={{ padding: '8px 0' }}><Link to="/chaves">Chaves</Link></li>
          <li style={{ padding: '8px 0' }}><Link to="/movimentacoes">Movimentações</Link></li>
          <li style={{ padding: '8px 0' }}><Link to="/usuarios">Usuários</Link></li>
          <li style={{ padding: '20px 0' }}><Link to="/" style={{ color: 'red' }}>Sair</Link></li>
        </ul>
      </nav>
    </aside>
    <main style={{ flex: 1, padding: '30px' }}>
      <Outlet />
    </main>
  </div>
);

// --- CONFIGURAÇÃO DAS ROTAS ---

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projetores" element={<Projetores />} />
          <Route path="/chaves" element={<Chaves />} />
          <Route path="/movimentacoes" element={<Movimentacoes />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}