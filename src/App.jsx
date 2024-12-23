import ProjectsSidebad from "./Componntets/ProjectsSidebad.jsx";
import NewProject from "./Componntets/NewProject.jsx";
import NoProjectSelected from "./Componntets/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./Componntets/SelectedProject.jsx";

function App() {
  const [ProjectState, SetProjectState] = useState({
    SlecetedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function HandelAddTask(text) {
    SetProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: text,
        projectId: prevState.SlecetedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function HandelDeleteTask(id) {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function HandelSelectProject(projectId) {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        SlecetedProjectId: projectId,
      };
    });
  }

  function HandelDeleteProject() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        SlecetedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.SlecetedProjectId
        ),
      };
    });
  }

  function HandelStartAddProject() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        SlecetedProjectId: null,
      };
    });
  }

  function HandelCancelAddProject() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        SlecetedProjectId: undefined,
      };
    });
  }

  function HandelAddProject(projectData) {
    SetProjectState((prevState) => {
      const NewProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        SlecetedProjectId: undefined,
        projects: [...prevState.projects, NewProject],
      };
    });
  }

  const selectedProject = ProjectState.projects.find(
    (project) => project.id === ProjectState.SlecetedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      OnDelete={HandelDeleteProject}
      onAddTask={HandelAddTask}
      onDeleteTask={HandelDeleteTask}
      tasks={ProjectState.tasks}
    />
  );

  if (ProjectState.SlecetedProjectId === null) {
    content = (
      <NewProject onAdd={HandelAddProject} onCancel={HandelCancelAddProject} />
    );
  } else if (ProjectState.SlecetedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={HandelStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebad
        onStartAddProject={HandelStartAddProject}
        projects={ProjectState.projects}
        onSelectProject={HandelSelectProject}
        selectedProjectId={ProjectState.SlecetedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
