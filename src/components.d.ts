/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
import { ITask } from "./interfaces/task.interface";
export namespace Components {
    interface AppRoot {
    }
    interface AppSidenav {
        "history": RouterHistory;
    }
    interface AppTaskViewPane {
    }
    interface ListOptions {
    }
    interface ListView {
        "history": RouterHistory;
        "match": MatchResults;
    }
    interface ListViewHeader {
        "match": MatchResults;
    }
    interface NewTaskInput {
    }
    interface TaskItem {
        "focusContainer": () => Promise<void>;
        "focusIndex": number;
        "task": ITask;
    }
    interface TasksList {
        "taskList": ITask[];
    }
    interface ThemeSelector {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppSidenavElement extends Components.AppSidenav, HTMLStencilElement {
    }
    var HTMLAppSidenavElement: {
        prototype: HTMLAppSidenavElement;
        new (): HTMLAppSidenavElement;
    };
    interface HTMLAppTaskViewPaneElement extends Components.AppTaskViewPane, HTMLStencilElement {
    }
    var HTMLAppTaskViewPaneElement: {
        prototype: HTMLAppTaskViewPaneElement;
        new (): HTMLAppTaskViewPaneElement;
    };
    interface HTMLListOptionsElement extends Components.ListOptions, HTMLStencilElement {
    }
    var HTMLListOptionsElement: {
        prototype: HTMLListOptionsElement;
        new (): HTMLListOptionsElement;
    };
    interface HTMLListViewElement extends Components.ListView, HTMLStencilElement {
    }
    var HTMLListViewElement: {
        prototype: HTMLListViewElement;
        new (): HTMLListViewElement;
    };
    interface HTMLListViewHeaderElement extends Components.ListViewHeader, HTMLStencilElement {
    }
    var HTMLListViewHeaderElement: {
        prototype: HTMLListViewHeaderElement;
        new (): HTMLListViewHeaderElement;
    };
    interface HTMLNewTaskInputElement extends Components.NewTaskInput, HTMLStencilElement {
    }
    var HTMLNewTaskInputElement: {
        prototype: HTMLNewTaskInputElement;
        new (): HTMLNewTaskInputElement;
    };
    interface HTMLTaskItemElement extends Components.TaskItem, HTMLStencilElement {
    }
    var HTMLTaskItemElement: {
        prototype: HTMLTaskItemElement;
        new (): HTMLTaskItemElement;
    };
    interface HTMLTasksListElement extends Components.TasksList, HTMLStencilElement {
    }
    var HTMLTasksListElement: {
        prototype: HTMLTasksListElement;
        new (): HTMLTasksListElement;
    };
    interface HTMLThemeSelectorElement extends Components.ThemeSelector, HTMLStencilElement {
    }
    var HTMLThemeSelectorElement: {
        prototype: HTMLThemeSelectorElement;
        new (): HTMLThemeSelectorElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "app-sidenav": HTMLAppSidenavElement;
        "app-task-view-pane": HTMLAppTaskViewPaneElement;
        "list-options": HTMLListOptionsElement;
        "list-view": HTMLListViewElement;
        "list-view-header": HTMLListViewHeaderElement;
        "new-task-input": HTMLNewTaskInputElement;
        "task-item": HTMLTaskItemElement;
        "tasks-list": HTMLTasksListElement;
        "theme-selector": HTMLThemeSelectorElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface AppSidenav {
        "history"?: RouterHistory;
    }
    interface AppTaskViewPane {
    }
    interface ListOptions {
    }
    interface ListView {
        "history"?: RouterHistory;
        "match"?: MatchResults;
    }
    interface ListViewHeader {
        "match"?: MatchResults;
    }
    interface NewTaskInput {
    }
    interface TaskItem {
        "focusIndex"?: number;
        "task"?: ITask;
    }
    interface TasksList {
        "taskList"?: ITask[];
    }
    interface ThemeSelector {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "app-sidenav": AppSidenav;
        "app-task-view-pane": AppTaskViewPane;
        "list-options": ListOptions;
        "list-view": ListView;
        "list-view-header": ListViewHeader;
        "new-task-input": NewTaskInput;
        "task-item": TaskItem;
        "tasks-list": TasksList;
        "theme-selector": ThemeSelector;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-sidenav": LocalJSX.AppSidenav & JSXBase.HTMLAttributes<HTMLAppSidenavElement>;
            "app-task-view-pane": LocalJSX.AppTaskViewPane & JSXBase.HTMLAttributes<HTMLAppTaskViewPaneElement>;
            "list-options": LocalJSX.ListOptions & JSXBase.HTMLAttributes<HTMLListOptionsElement>;
            "list-view": LocalJSX.ListView & JSXBase.HTMLAttributes<HTMLListViewElement>;
            "list-view-header": LocalJSX.ListViewHeader & JSXBase.HTMLAttributes<HTMLListViewHeaderElement>;
            "new-task-input": LocalJSX.NewTaskInput & JSXBase.HTMLAttributes<HTMLNewTaskInputElement>;
            "task-item": LocalJSX.TaskItem & JSXBase.HTMLAttributes<HTMLTaskItemElement>;
            "tasks-list": LocalJSX.TasksList & JSXBase.HTMLAttributes<HTMLTasksListElement>;
            "theme-selector": LocalJSX.ThemeSelector & JSXBase.HTMLAttributes<HTMLThemeSelectorElement>;
        }
    }
}
