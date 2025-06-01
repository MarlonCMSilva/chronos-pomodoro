import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/taskStateModel';
import { MainTemplate } from '../../template/MainTemplate';

export type HomeProps = {
  state: TaskStateModel;
  setstate: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
